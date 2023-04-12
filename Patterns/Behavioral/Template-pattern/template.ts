abstract class WebsiteTemplate {
    showPage() {
        console.log("Header");
        this.showPageContent();
        console.log("Footer");
    }

    abstract showPageContent();
}



class MainPage extends WebsiteTemplate {
    showPageContent() {
        console.log("Main-page content");
    }
}

class Gallery extends WebsiteTemplate {
    showPageContent() {
        console.log("Gallery-page content");
    }
}


let mainPage = new MainPage();
let gallery = new Gallery();

mainPage.showPage();
console.log("--------------------------------");
gallery.showPage();