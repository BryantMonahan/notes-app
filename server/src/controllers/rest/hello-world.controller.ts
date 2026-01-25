import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";
import type { hello } from "@shared/exObj.js";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/hello")
  get(): hello {
    return { message: "hello" }
  }
}
