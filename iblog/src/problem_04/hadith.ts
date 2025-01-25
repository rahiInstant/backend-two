import IHadith from "./dummyHadithLibrary";

class HadithDaily {
  constructor() {
    //
  }

  giveHadith():string {
    const hadith = new IHadith().getHadith();
    if (hadith) {
      return hadith;
    } else {
      return this.giveHadith();
    }
  }
}

export default HadithDaily

