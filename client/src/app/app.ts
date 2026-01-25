import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { hello } from '@shared/exObj'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('notes-app')
  private http = inject(HttpClient)

  async clickMe() {
    const req = new Request('/rest/hello-world/hello')
    // console.log(req)
    const res = await fetch('rest/hello-world/hello')
    this.http.get<hello>('/rest/hello-world/hello').subscribe(msg => {
      console.log('here')
      console.log(msg.message)
    })
    console.log('this ran')
    console.log(await res.text())
    // console.log(await res.json())
    console.log(res)
  }
}
