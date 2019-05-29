export interface IMagazineIssue {
  name: string;
  month: string;
  year: number;
}
export enum MagazineName {
  ItMag = 'IT Mag',
  HodorMag = 'Hodor Mag',
  AndroidNews = 'Android News',
  NgNews = 'Ng News'
  
}

const names = Object.keys(MagazineName).map(key => MagazineName[key]);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const years = [2017, 2018, 2019, 2020];

export const magazineIssues: IMagazineIssue[] = [];

for (let name of names) {
  for (let year of years) {
    for (let month of months) {
      magazineIssues.push({
        name: name,
        month: month,
        year: year
      })
    }
  }
};
