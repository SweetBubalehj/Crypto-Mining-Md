    // Code by Greg Galloway 1997
    // Web-site http://www.02sms.net/java-16.html

    function createArray(size) {
        for (var i = 0; i < size; i++) {
            this[i] = null
        }
        return this
    }

function Product(descrip, money) {
    this.description = descrip;
    this.price = money;
}

function Category(name) {
    this.title = name;
    this.product = new createArray(1);
    this.product[0] = new Product("Пожалуйста, выберите продукт", 0.00);
}

var category = new createArray(1);

color1 = "tan";
color2 = "khaki";


category[1] = new Category("GPU");
category[1].product[1] = new Product("Asus ROG RTX 3090", 1950);
category[1].product[2] = new Product("Asus ROG RTX 3080", 1100);
category[1].product[3] = new Product("Asus ROG RTX 3070", 750);
category[1].product[4] = new Product("MSI Gaming X RTX 3060ti", 550);
category[1].product[5] = new Product("Asus ROG RTX 3060", 450);
category[1].product[6] = new Product("Palit GameRock 3080", 1090);
category[1].product[7] = new Product("Aorus Elite RTX 3070", 730);
category[1].product[8] = new Product("Asus TUF RTX 3060", 390);
category[1].product[8] = new Product("MSI Armor RTX 3060", 380);
category[1].product[9] = new Product("Nvidia FE RTX 3090", 1990);
category[1].product[10] = new Product("Inno3D iChill RTX 2080ti", 810);
category[1].product[11] = new Product("Inno3D iChill RTX 2070s", 430);
category[1].product[12] = new Product("Asus TUF GTX 1660s", 310);
category[1].product[13] = new Product("Sapphire Nitro+ RX 580", 260);
category[1].product[14] = new Product("Sapphire Pulse RX 580", 240);
category[1].product[15] = new Product("Sapphire Nitro+ RX 570", 240);
category[1].product[16] = new Product("XFX XXX Edition RX 570", 230);
category[1].product[17] = new Product("Sapphire Nitro+ RX 5700", 410);
category[1].product[18] = new Product("Sapphire Nitro+ RX 5700 XT", 440);
category[1].product[19] = new Product("Sapphire Nitro+ RX 6900 XT", 1250);
category[1].product[20] = new Product("Sapphire Nitro+ RX 6800 XT", 1050);
category[1].product[21] = new Product("XFX MERC319 RX 6800", 950);

category[2] = new Category("Motherboard");
category[2].product[1] = new Product("Asus B250 Mining Expert", 599);
category[2].product[2] = new Product("ASRock H110 Pro BTC+", 354);
category[2].product[3] = new Product("ASUS Prime Z390-P LGA1151", 198);
category[2].product[4] = new Product("Biostar TB250-BTC Pro", 265);
category[2].product[5] = new Product("MSI Z170A Gaming Pro Carbon", 330);
category[2].product[6] = new Product("Asus ROG Strix Z270E", 600);

category[3] = new Category("Asic");
category[3].product[1] = new Product("BW-L21 ASIC Miner", 940);
category[3].product[2] = new Product("Bitmain AntMiner L3+", 870);
category[3].product[3] = new Product("ASIC X11 Miner Pinidea DR-100", 3120);
category[3].product[4] = new Product("Bitmain Antminer D3", 2700);
category[3].product[5] = new Product("Innosilicon A5 DashMaster", 5055);
category[3].product[6] = new Product("Bitmain Antminer S9", 610);
category[3].product[7] = new Product("Ebit E9 Plus Miner 9TH/s", 2320);
category[3].product[8] = new Product("Майнер Pantech SX5", 1670);

category[4] = new Category("PSU");
category[4].product[1] = new Product("Corsair HX Series HX1200", 480);
category[4].product[2] = new Product("Corsair AXi Series AX1600i", 840);
category[4].product[3] = new Product("Thermaltake Toughpower 1500wt", 350);
category[4].product[4] = new Product("EVGA SuperNOVA 1300 G+", 650);
category[4].product[5] = new Product("Seasonic FOCUS Plus 1000 Gold", 410);
category[4].product[6] = new Product("Chieftec Proton BDF-1000C", 310);


function SetLengths() {
    var k = 1;
    while (category[k] != null)
        k++
    category.length = k;
    for (i = 1; i < category.length; i++) {
        var j = 1;
        while (category[i].product[j] != null)
            j++;
        category[i].product.length = j;
    }
}

SetLengths();

function writeTableRow(i) {
    document.write('<tr style="background-color: #54626F;">');
    document.write('<td>' + category[i].title.toUpperCase() + ':<br>'
        + '<select size="1" name="menu' + i + '" onChange="update(' + i + ')">');
    len = category[i].product.length;
    for (j = 0; j < len; j++) {
        if (j != 0)
            document.write('<option>' + category[i].product[j].description
                + ' - $' + fix(category[i].product[j].price) + '</option>');
        else
            document.write('<option selected value=" ">Пожалуйста, выберите продукт</option>');
    }
    document.write('</select></td><td valign=bottom>'
        + '<input type="text" value="0.00" name="price' + i + '" '
        + 'size=12 maxlength=12 onFocus="document.form1.price' + i + '.blur()">'
        + '</td></tr>');
}

function writeTable() {
    document.write('<table cellspacing=5 cellpadding=10 border=0>');
    for (i = 1; i < category.length; i++)
        writeTableRow(i);
    document.write('<tr style="background-color: #54626F;' + ((category.length % 2 == 0) ? color1 : color2)
        + '"><td align=right>СУММА ЗАКАЗА: </td><td><input type="text" '
        + 'name="total" size=12 maxlength=12 value="0.00"></td></tr></table>');
}

function update(num) {
    eval('selected = document.form1.menu' + num + '.selectedIndex;');
    cost = fix(category[num].product[selected].price);
    eval('document.form1.price' + num + '.value = cost;');
    var grand_total = 0;
    for (i = 1; i < category.length; i++)
        eval('grand_total += parseFloat(document.form1.price' + i + '.value);');
    document.form1.total.value = fix(grand_total);
}

function fix(num) {
    string = "" + num;
    if (string.indexOf('.') == -1)
        return string + '.00';
    seperation = string.length - string.indexOf('.');
    if (seperation > 3)
        return string.substring(0, string.length - seperation + 3);
    else if (seperation == 2)
        return string + '0';
    return string;
}

function validate_form() {
    validity = true;
    if (document.form1.shopper_name.value == "") {
        alert('Введите Ваше имя!');
        validity = false;
    }
    if (document.form1.email.value == "") {
        if (confirm("Вы будете вводить email адрес?"))
            valid = false;
        else
            document.form1.email.value = 'email адрес не введен';
    }
    if (document.form1.phone.value == "") {
        alert('Вы должны ввести номер Вашего телефона!');
        validity = false;
    }
    if (document.form1.credit_card_number.value == "") {
        alert('Вы должны ввести номер кредитной карты!');
        validity = false;
    } else if (document.form1.expiration_date.value == "") {
        alert('Вы должны ввести дату окончания действия кредитной карты!');
        validity = false;
    }
    if (document.form1.bill.value == "") {
        alert('Введите адрес для отправки счета!');
        validity = false;
    } else if (document.form1.mail.value == "") {
        if (!confirm("Отправлять заказ по томуже адресу, что и счета?"))
            validity = false;
        else
            document.form1.mail.value = 'тот же, что и адрес для счета';
    }
    if (validity) {
        alert("Спасибо за заказ!");
        return true;
    }
    else {
        return false;
    }
}