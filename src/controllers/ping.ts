import { Get, Route } from "tsoa";

interface PingResponse {
  message: string;
}

@Route("ping")
export default class PingController {
  // @Get("/{id}/edit")
  public async getMessage(limit: string): Promise<PingResponse> {
    return {
      message: "pong limit= " + limit + "  mode = edit",
    };
  }
}
