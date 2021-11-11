import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { Get3LastMessagesController } from "./controller/GetLast3MessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";

const router = Router();
router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticate, new CreateMessageController().handle);
router.get("/messages/last3", new Get3LastMessagesController().handle);
router.get("/profile",  ensureAuthenticate, new ProfileUserController().handle);

export { router };
