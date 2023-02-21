import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const timeSnippetCode: snippetCode = {
  html: `<ng2-flatpickr [config]="timeOptions" name="time"></ng2-flatpickr>`,
  ts: `public   timeOptions: FlatpickrOptions = {
  enableTime: true,
  noCalendar: true,
  altInput: true
}`
};