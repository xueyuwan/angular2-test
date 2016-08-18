import {Component, ChangeDetectionStrategy, ViewChild, ViewContainerRef} from '@angular/core'
import {CORE_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router';
import {AppService} from '../../../app.service';

@Component({
    selector: 'topTool',
    templateUrl: 'app/parts/basic/topTool/topTool.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class topTool {
    // 保存网站数据
    saveWebsitData() {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    };
    // 清除缓存
    clearWebsitData() {
        localStorage.setItem('websiteData', '');
    }

    page: any;
    public constructor(viewContainerRef: ViewContainerRef, appService: AppService, router: Router) {
        var path = router.url.replace('/', '');
        this.page = appService.getPageParts(path);
    }
    // 组件上移
    upPart(part) {
        var index = this.page.parts.indexOf(part);
        if (index !== 0) {
            var preElement = this.page.parts[index - 1];
            this.page.parts[index] = preElement;
            this.page.parts[index - 1] = part;
        }
    }
    // 组件下移
    downPart(part) {
        var index = this.page.parts.indexOf(part);
        var partLength=this.page.parts.length-1
        if (index !==partLength) {
            var nextElement = this.page.parts[index +1];
            this.page.parts[index] = nextElement;
            this.page.parts[index + 1] = part;
        }
    }
    //删除组件
    deletePart(part) {
        var index = this.page.parts.indexOf(part);
        var after = this.page.parts.slice(index + 1);
        var before = this.page.parts.slice(0, index);
        this.page.parts = before.concat(after);

    }




}