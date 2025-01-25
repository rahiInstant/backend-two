interface reportFormate {
  applyFormatting(): void;
}

class JSONFormate implements reportFormate {
  applyFormatting(): void {
    console.log("JSON Formate");
  }
}

class HTMLFormate implements reportFormate {
  applyFormatting(): void {
    console.log("HTML Formate");
  }
}

abstract class report {
  protected formate: reportFormate;
  constructor(formate: reportFormate) {
    this.formate = formate;
  }
  abstract returnReport(): void;
}

class userSignUpInformationReport extends report {
  returnReport(): void {
    console.log(`User SignUp Information Report as ${this.formate.applyFormatting()}`);
  }
}

class paymentReport extends report {
  returnReport(): void {
    console.log(`Payment Report as ${this.formate.applyFormatting()}`);
  }
}

class postReport extends report {
  returnReport(): void {
    console.log(`Post Report as ${this.formate.applyFormatting()}`);
  }
}

const json = new JSONFormate();
const html = new HTMLFormate();

const userSignUpInformation = new userSignUpInformationReport(json);
const payment = new paymentReport(html);
const post = new postReport(json);
