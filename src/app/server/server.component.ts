import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    template: `
                <div class="card">
                    <div class="card-body">
                        Hi from AppServer Component
                    </div>
                </div>
            `,
    styleUrls: ['./server.component.css']
})
export class ServerComponent { }