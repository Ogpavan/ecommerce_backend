import multer from "multer";

// Configure Multer for local storage
const storage = multer.diskStorage({});
const upload = multer({ storage });

export default upload;
