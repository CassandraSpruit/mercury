import { NgModule } from '@angular/core';
import { PbiComponent } from '@sprint/components/pbi/pbi.component';
import { PbiCardComponent } from '@sprint/components/pbi-card/pbi-card.component';
import { PbiColumnComponent } from '@sprint/components/pbi-column/pbi-column.component';
import { PbiTaskComponent } from '@sprint/components/pbi-task/pbi-task.component';
import { SprintComponent } from '@sprint/components/sprint/sprint.component';
import { SprintService } from '@sprint/services/sprint.service';
import { TfsService } from '@sprint/services/tfs.service';
import { QueryService } from '@sprint/services/query.service';
import { CommonModule } from '@angular/common';
import { WorkItemMapper } from '@sprint/constants/work-item-mapper';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        PbiComponent,
        PbiCardComponent,
        PbiColumnComponent,
        PbiTaskComponent,
        SprintComponent
    ],
    providers: [
        SprintService,
        TfsService,
        QueryService,
        WorkItemMapper
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class SprintBoardModule { }
