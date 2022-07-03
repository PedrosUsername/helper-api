import express from "express";
import { TextController } from "../controllers/TextController";


const router = express.Router();
const _controller = new TextController;

router.get("/text/lorem-ipsum", _controller.getLoremIpsum);

export = router;
