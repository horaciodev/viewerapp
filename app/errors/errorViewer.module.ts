import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorListComponent } from './error-list.component';
import { ErrorFilterPipe } from './error-filter.pipe';
import { ErrorReaderService } from './errorReader.service';
import { SharedModule } from '../shared/shared.module';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  imports: [
            SharedModule,
            ErrorRoutingModule
          ],
  declarations: [ErrorListComponent,
                ErrorFilterPipe],
  providers: [ErrorReaderService]
})
export class ErrorViewerModule { }
