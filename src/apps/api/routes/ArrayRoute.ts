import express from "express";
import { ArrayController } from "../controllers/ArrayController";

const router = express.Router();
const _controller = new ArrayController();

router.post("/array/ordenar", _controller.postEx002);

export = router;
