export interface IMagazineIssue {
  name: string;
  month: string;
  year: number;
}

const names = ['IT Mag', 'Hodor Mag', 'Android News', 'Ng News'];
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
