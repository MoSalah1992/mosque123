import { Component, OnInit } from '@angular/core';
import { PrivateFilesService } from './PrivateFiles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-private-files',
  templateUrl: './private-files.component.html',
  styleUrls: ['./private-files.component.scss'],
})
export class PrivateFilesComponent implements OnInit {
  filesList: any[] = [];

  constructor(
    private privateFilesService: PrivateFilesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getPrivateFile();
  }

  getPrivateFile() {
    this.privateFilesService.getPrivateFile({}).subscribe({
      next: (data) => {
        
        if (data) {
          this.filesList = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  openPrivateFile(file: any) {
    
    this.router.navigate([`general`], {
      relativeTo: this.route,
      state: { fileId: file.id },
    });
  }
}
