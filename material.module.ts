

import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";

import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule}from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    exports: [
        MatToolbarModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        

    ]
})

export class MaterialModule { }