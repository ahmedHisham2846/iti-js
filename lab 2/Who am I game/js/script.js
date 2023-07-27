var respose = confirm("Do you fly?");
switch (respose) {
  case true:
    respose = confirm("Are you wild?");
    respose ? document.write("Engle") : document.write("Parrot");
    break;

  default:
    respose = confirm("Do you live under sea?");
    switch (respose) {
      case true:
        respose = confirm("Are you wild?");
        respose ? document.write("Shark") : document.write("Dolphin");
        break;

      default:
        respose = confirm("Are you wild?");
        respose ? document.write("Lion") : document.write("Cat");
    }
}
