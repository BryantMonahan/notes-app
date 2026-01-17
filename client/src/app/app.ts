import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('notes-app')

  async clickMe() {
    const req = new Request('/rest/hello-world/hello')
    // console.log(req)
    const res = await fetch('/rest/hello-world/hello')
    console.log(await res.text())
    console.log(await res.json())
    console.log(res)
  }
}
