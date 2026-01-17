import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/hello")
  get() {
    return { message: "hello" }
  }
}
