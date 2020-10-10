- This project created was with [Next.js](https://nextjs.org/). 
## DEMO LinK :: https://nextjs-sutthikiat.netlify.app
## CSV Example Download :: https://drive.google.com/file/d/1PDLmA6SWSah_tuTNIMSGCZqGyLOoyk_U/view?usp=sharing

### `Can you start`

- yarn install

## npm run dev

## ----------------------------------------------------------------------------------------------------------------------------------------------

## อธิบายวิธีการ Auto Deploy With Google Cloud Run

## Cloud Run คือ Serverless Platform ใหม่ของ Google ที่จะช่วยให้เราสามารถ deploy เซิฟเวอร์ขึ้นไปได้โดยที่เราไม่ต้องสนว่าจะตั้งค่าเซิฟเวอร์ยังไง หรือจะต้องมาเสียค่าใช้จ่ายเพื่อให้เซิฟเวอร์รันตลอดแม้ว่าจะไม่มีใครเรียกอีกด้วย

## Cloud Build คือบริการของ Google อันนึงที่จะช่วย build, test และ deploy โค้ดของเราอัตโนมัติ โดยเราสามารถตั้งทริกเกอร์ให้มันทำงานทุกครั้งที่เรา push ขึ้นไปได้

## การเตรียมการ
1. สร้าง GCP Project
2. อนุญาตให้โปรเจ็คใช้ Cloud Build และ Cloud Run
3. ลง Cloud SDK - https://cloud.google.com/sdk/docs/
4. ลง gcloud beta component ด้วยคำสั่ง command $- gcloud components install beta
5. อัพเดตด้วย ด้วยคำสั่ง command $- gcloud components update

## ขั้นตอน
1. ในการ deploy ขึ้น Cloud Run นั้น เราจะไม่เอาโค้ดขึ้นเซิฟเวอร์โดยตรง(เพราะไม่มีเซิฟเวอร์) 
แต่จะ build โค้ดภายใน Container แล้วค่อยส่ง Container ขึ้น Cloud Run แทน ซึ่งเมื่อมีผู้ใช้ยิงเข้า “เซิฟเวอร์” Cloud Run ก็จะเรียกให้ Container ทำงานแทน
2. เขียนคำสั่งต่างๆลงใน DockerFile
3. นำ DockerFile สร้างเป็น Docker Image Container จากโค้ดที่เราเขียนและเอาขึ้น Container Registry ด้วยคำสั่ง  $- gcloud builds submit --tag gcr.io/[PROJECT ID]/[IMAGE NAME]
4. เขียน script ให้ Cloud Build deploy อัตโนมัติ 
- 4.1.1 โดยเบื้องต้นให้ตั้ง Trigger ใน Google cloud console ให้เชื่อมต่อกับ GitHub, BitBucket, หรืออื่นๆ และเมื่อเรา push code ขึ้น git มันจะอ่านคำสั่งในไฟล์ cloudbuild.yaml
- -4.1.2 ใน cloudbuild.yaml บรรทัดแรก - เราจะใช้คำสั่ง สร้าง Docker Container จาก name และ args ที่เราใส่ไป จะเสมือนเราสั่งคำสั่ง $- docker build -t gcr.io/$PROJECT_ID/[SERVICE-NAME] (เรียกใช้ Container Image ที่เราเก็บไว้บน Container Registry)
- 4.1.3 push Container Image หากเราต้องเก็บ Container Image ไว้บน Container Registry เราจะทำในขั้นตอนนี้ เสมือนรันคำสั่ง docker push gcr.io/$PROJECT_ID/[SERVICE-NAME]
- 4.1.4 deploy ขึ้น Cloud Run ในสเต็ปนี้จะรันคำสั่งเหมือนตอน deploy Cloud Run ด้วยมือเลย คือ $- gcloud beta run deploy [SERVICE-NAME] --image gcr.io/$PROJECT_ID/[SERVICE-NAME] --region [REGION] --platform [PLATFORM] --quiet
- 4.1.5 push Container Image สเต็ปนี้ก็จะ push Container Image ขึ้น Container Registry อีกรอบด้วยเหมือนกัน

> ข้อ.3 - โดยเราจะต้องแทน [PROJECT ID] และ [IMAGE NAME] ด้วย GCP Project ID และชื่อ Image ที่เราอยากใช้ 
เราสามารถรันคำสั่ง gcloud config get-value project เพื่อเอา Project ID ได้เลย ส่วน [IMAGE NAME] เราไม่จำเป็นต้องเผื่อถึงเวอร์ชั่นหรือชื่อ service

> ใน cloudbuild.yaml $PROJECT_ID นั้น Cloud Run เปรียบเสมือน id ของ GCP Project ทาง Google cloud จะใส่ให้เลย

