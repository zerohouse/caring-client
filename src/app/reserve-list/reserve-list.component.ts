import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../ngxSpring/api.service';
import {Page, Reserve} from '../../../ngxSpring/api.model';

declare var TableToExcel;

export function checkAuthority() {
    return prompt('암호?') === '1515';
}

@Component({
    selector: 'cr-reserve-list',
    templateUrl: './reserve-list.component.html',
    styleUrls: ['./reserve-list.component.sass']
})
export class ReserveListComponent implements OnInit {
    data: Page<Reserve>;

    constructor(private api: ApiService) {
        // const el = document.createElement('script');
        // el.innerText = '  (function () {\n' +
        //     '            var w = window;\n' +
        //     '            if (w.ChannelIO) {\n' +
        //     '                return (window.console.error || window.console.log || function () {\n' +
        //     '                })(\'ChannelIO script included twice.\');\n' +
        //     '            }\n' +
        //     '            var d = window.document;\n' +
        //     '            var ch = function () {\n' +
        //     '                ch.c(arguments);\n' +
        //     '            };\n' +
        //     '            ch.q = [];\n' +
        //     '            ch.c = function (args) {\n' +
        //     '                ch.q.push(args);\n' +
        //     '            };\n' +
        //     '            w.ChannelIO = ch;\n' +
        //     '\n' +
        //     '            function l() {\n' +
        //     '                if (w.ChannelIOInitialized) {\n' +
        //     '                    return;\n' +
        //     '                }\n' +
        //     '                w.ChannelIOInitialized = true;\n' +
        //     '                var s = document.createElement(\'script\');\n' +
        //     '                s.type = \'text/javascript\';\n' +
        //     '                s.async = true;\n' +
        //     '                s.src = \'https://cdn.channel.io/plugin/ch-plugin-web.js\';\n' +
        //     '                s.charset = \'UTF-8\';\n' +
        //     '                var x = document.getElementsByTagName(\'script\')[0];\n' +
        //     '                x.parentNode.insertBefore(s, x);\n' +
        //     '            }\n' +
        //     '\n' +
        //     '            if (document.readyState === \'complete\') {\n' +
        //     '                l();\n' +
        //     '            } else if (window.attachEvent) {\n' +
        //     '                window.attachEvent(\'onload\', l);\n' +
        //     '            } else {\n' +
        //     '                window.addEventListener(\'DOMContentLoaded\', l, false);\n' +
        //     '                window.addEventListener(\'load\', l, false);\n' +
        //     '            }\n' +
        //     '        })();\n' +
        //     '        ChannelIO(\'boot\', {\n' +
        //     '            \'pluginKey\': \'7db0ec34-0797-4661-ae24-20fef1cb8ccf\'\n' +
        //     '        });';
        //
        // document.body.append(el);
    }

    ngOnInit() {
        this.load(0);
    }

    load($event: any) {
        this.api.reserve.getReserveList($event, 10).subscribe(data => this.data = data);
    }

    download(table: HTMLTableElement) {
        TableToExcel.convert(table, {
            name: '상담요청.xlsx',
            sheet: {
                name: '상담요청'
            }
        });
    }

    update(item) {
        this.api.reserve.updateMemo(item.id, item.memo).subscribe();
    }

    delete(item) {
        if (!checkAuthority()) {
            return;
        }
        this.api.reserve.deleteReserve(item.id).subscribe(() => {
            this.data.content.remove(item);
        });
    }

    new() {
        this.data.content.unshift({direct: true} as Reserve);
    }

    save(item: Reserve) {
        this.api.reserve.save(item).subscribe(i => {
            item.id = i.id;
            item.createdAt = i.createdAt;
        });
    }

}

