import express from "express";
import { TextController } from "../controllers/TextController";


const router = express.Router();
const _controller = new TextController;

router.get("/text/loren-ipsum", _controller.getLorenIpsum);

export = router;
