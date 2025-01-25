type returnTypeOfCheck = {
  Score: number | string;
  Result: string | number;
};

class grammarly {
  public checkGrammar(text: string): Array<number | string> {
    return [0, text + " is checked by grammarly"];
  }
}

class grammerCheck {
  public check(text: string): { checkScore: number; checkResult: string } {
    return {
      checkScore: 10,
      checkResult: text + " is checked by grammerCheck",
    };
  }
}

class grammerCheckAdapter {
  private grammerCheck: grammerCheck;
  constructor() {
    this.grammerCheck = new grammerCheck();
  }

  public checkGrammar(text: string): returnTypeOfCheck {
    const result = this.grammerCheck.check(text);
    console.log(result);
    return {
      Score: result.checkScore,
      Result: result.checkResult,
    };
  }
}

class grammarlyCheckAdapter {
  private grammarly: grammarly;
  constructor() {
    this.grammarly = new grammarly();
  }

  public checkGrammar(text: string): returnTypeOfCheck {
    const result = this.grammarly.checkGrammar(text);
    console.log(result);
    return {
      Score: result[0],
      Result: result[1],
    };
  }
}


export default { grammarlyCheckAdapter, grammerCheckAdapter };

