import { action, runInAction, makeAutoObservable } from "mobx";
import { getCountryByName } from "api/apiService";

export type Country = {
  name: string;
  fullName: string;
  flag: string;
};

class CountryStore {
  items: Array<Country> = [];
  needle: string = "";
  isFetchingInProgress = false;
  fetchingError?: string;

  constructor() {
    makeAutoObservable(this);

    this.setNeedle = this.setNeedle.bind(this);
  }

  @action.bound
  setNeedle(needle: string): void {
    this.needle = needle;
  }

  @action.bound
  async fetch(): Promise<void> {
    runInAction(() => {
      this.fetchingError = "";
      this.isFetchingInProgress = true;
    });

    try {
      this.items = await getCountryByName(this.needle);
    } catch (e: any) {
      this.fetchingError = e.mesaage;
    }

    runInAction(() => {
      this.isFetchingInProgress = false;
    });
  }
}

export const countryStore = new CountryStore();
