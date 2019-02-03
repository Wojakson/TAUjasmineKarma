describe("validator", function () {


    beforeAll(function () {
        $('body').append(`
        <div id="nick">s</div>
        <div id="number">22</div>
        <div id="xor1" class="xor">00</div>
        <div id="xor2" class="xor">d0</div>
        <div id="pass">95011503554</div>
        `);
    });

    it("invalid nick name", function () {
        $('#nick').validate(/^[A-Z][a-z]+/);
        expect($('#nick').css("background-color")).toEqual("rgb(255, 0, 0)");
    });

    it("valid text", function () {
        $('#number').validate(/^\d+/);
        expect($('#number').css("background-color")).toEqual("rgb(0, 255, 0)");
    });

    it("partialy valid", function () {
        $('.xor').validate(/^\d[a-z]*/);
        expect($('#xor1').css("background-color")).toEqual("rgb(0, 255, 0)");
        expect($('#xor2').css("background-color")).toEqual("rgb(255, 0, 0)");
    });

    it("valid pesel", function () {
        $('#pesel').validate(/^[0-9]{11}$/);
        expect($('#pass').css("background-color")).toEqual("rgb(0, 255, 0)");
    });




});

// karma start karma.conf.js