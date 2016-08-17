import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap'
@Component({
    selector: 'topTool',
    directives: [TAB_DIRECTIVES, CORE_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'app/parts/basic/topTool/topTool.html'

})
export class topTool {
    saveWebsitData() {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    };


    clearWebsitData() {
        localStorage.setItem('websiteData', '');
    }

    public removeTabHandler(/*tab:any*/): void {
        console.log('Remove Tab handler');
    };

}