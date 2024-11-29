# InPic AI - Generate Stunning Images

InPic AI is a web platform that allows users to generate images from text prompts using the ClipDrop API. The platform also includes user authentication, account creation, and a credit-based system for generating images.

### Weblink: [Live Website](https://inpicai.onrender.com)

## Features

- **Text to Image Generation:** Users can input text prompts, and the system generates corresponding images using the ClipDrop API.
- **User Authentication:** Sign-up and login functionality to allow users to create accounts and access the platform securely.
- **Credit System:** Users can buy credits to generate images. Each image generation consumes one credit.
- **Responsive Design:** A seamless user experience across all devices, ensuring accessibility and ease of use.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Image Generation API:** ClipDrop API
- **Authentication:** JWT (JSON Web Tokens) for secure user login and registration.

## Prerequisites

- Node.js
- MongoDB (local or cloud instance)
- ClipDrop API Key (obtainable from [ClipDrop](https://clipdrop.co))

### InPic AI Website Images

<img width="950px;" src="https://res.cloudinary.com/cloud-alpha/image/upload/v1732901946/InPicAI/home_vo1puj.png"/>
<img width="950px;" src="https://res.cloudinary.com/cloud-alpha/image/upload/v1732901946/InPicAI/purchase_ljgos6.png"/>
<img width="950px;" src="https://res.cloudinary.com/cloud-alpha/image/upload/v1732901946/InPicAI/create_account_gfvysp.png"/>
<img width="950px;" src="https://res.cloudinary.com/cloud-alpha/image/upload/v1732901946/InPicAI/login_sxu335.png"/>
<img width="950px;" src="https://res.cloudinary.com/cloud-alpha/image/upload/v1732901947/InPicAI/generate_image_jxo3wc.png"/>
<img width="950px;" src="https://res.cloudinary.com/cloud-alpha/image/upload/v1732902169/InPicAI/footer_sjb8il.png"/>

### Installation

To run both the frontend and backend of the InPic AI platform locally, follow these steps:

#### For Frontend
1. Clone the repository: `git clone https://github.com/raushan-kumar7/inpicai.git`
2. Navigate to the frontend directory: `cd inpicai/client`
3. Install the dependencies: `npm install`
4. Start the frontend server in development mode: `npm run dev`
5. The frontend will be accessible at: [http://localhost:5173](http://localhost:5173)

#### For Backend
1. Clone the repository (if not already done): `git clone https://github.com/raushan-kumar7/inpicai.git`
2. Navigate to the backend directory: `cd inpicai/server`
3. Install the dependencies: `npm install`
4. Start the backend server in development mode: `npm run dev`
5. Alternatively, start the backend server in production mode: `npm run start`
6. The backend will be accessible at: [http://localhost:3600](http://localhost:3600)