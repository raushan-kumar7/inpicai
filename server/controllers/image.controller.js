import axios from "axios";
import User from "../models/user.model.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;
    const user = await User.findById(userId);

    if (!user || !prompt) {
      return res.json({ success: false, message: "All filds are required" });
    }

    if (user.creditBalance === 0 || User.creditBalance < 0) {
      return res.json({
        success: false,
        message: "Insufficient credit balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;
    await User.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
