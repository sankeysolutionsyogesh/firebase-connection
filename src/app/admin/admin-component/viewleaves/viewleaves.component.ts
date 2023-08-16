import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../../admimn-services/student-service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-viewleaves',
  templateUrl: './viewleaves.component.html',
  styleUrls: ['./viewleaves.component.css']
})
export class ViewleavesComponent implements OnInit {
  id: any = null;
  leaveInfo: any = {}
  loading: boolean = true

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private leaveservices: StudentServiceService) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.id = parseInt(id);
        this.leaveservices.getSingleLeaves(this.id).subscribe((data): any => {
          console.log("Leaves", data[0])
          this.leaveInfo = data[0]
          this.loading = false
        });
      }
      // this.id = parseInt(id)
      console.log("ID", this.id)
      // Now you can use the 'id' in your component
    });
  }

  ngOnInit(): void {

  }

  Approval(event: any) {
    console.log(event);
    
    this.leaveservices.updateStudentStatus(this.leaveInfo.leaveId, event)

  }

  formatDateWithDay(date: any): string {
    const formattedDate = this.datePipe.transform(date, 'dd-MMM-YYYY');
    const dayOfWeek = this.datePipe.transform(date, 'EEEE'); // EEEE gives full day name

    return `${formattedDate} (${dayOfWeek})`;
  }


}
