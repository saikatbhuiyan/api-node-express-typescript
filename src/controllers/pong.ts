import { Get, Route } from "tsoa";

interface PongResponse {
    message: string;
  }
  
  @Route("pong")
  export default class PongController {
    @Get("/")
    public async getMessage(): Promise<PongResponse> {
      return {
        message: "ping",
      };
    }
  }