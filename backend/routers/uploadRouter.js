import multer from 'multer';
import express from 'express';
import { isAuth } from '../util.js';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.jpg`);
    },
});

const upload = multer({ storage });

uploadRouter.post('/', isAuth, upload.single('image'), (res, req) => {
    res.send(`/${req.file.path}`);
});

export default uploadRouter;