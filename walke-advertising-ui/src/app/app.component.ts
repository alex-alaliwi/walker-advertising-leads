import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeadService, Lead } from './services/lead.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  leads: Lead[] = [];
  selectedLead: Lead | null = null;
  newLead: Lead = {
    name: '',
    phoneNumber: '',
    zipCode: '',
    canReceiveText: false,
    canReceiveEmail: false,
    email: ''
  };

  constructor(private leadService: LeadService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchLeads();
  }

  fetchLeads(): void {
    this.leadService.getLeads().subscribe(data => {
      this.leads = JSON.parse(JSON.stringify(data));
      this.cdr.detectChanges();
    });
  }

  selectLead(lead: Lead): void {
    this.selectedLead = lead;
  }

  closeDetails(): void {
    this.selectedLead = null;
  }

  addLead(): void {
    if (!this.newLead.name || !this.newLead.phoneNumber || !this.newLead.zipCode) {
      alert('Name, Phone Number, and Zip Code are required.');
      return;
    }

    this.leadService.addLead(this.newLead).subscribe(lead => {
      this.leads = JSON.parse(JSON.stringify([...this.leads, lead]));
      this.newLead = { name: '', phoneNumber: '', zipCode: '', canReceiveText: false, canReceiveEmail: false, email: '' };
      this.cdr.detectChanges();
    });
  }

  trackById(index: number, lead: Lead): number {
    return lead.id!;
  }
}
