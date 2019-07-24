import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [
  CommonModule,
  HttpClientModule,
  MatPaginatorModule,
  MatTableModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})

export class SharedModule {
}
