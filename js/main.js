window.addEventListener('DOMContentLoaded', () => {
    const Kreditsum = document.querySelector("#Kreditsum"),
    boshlangicht = document.querySelector("#boshlangicht"),
        YillikFoiz = document.querySelector("#YillikFoiz"),
        YillikMuddat = document.querySelector("#YillikMuddat"),
        Kalendaryili = document.querySelector("#Kalendaryili"),
        Kalendaroyi = document.querySelector("#Kalendaroyi"),
        knopka = document.querySelector(".btn"),
        kriditlist = document.querySelector('#kridit-list')

    var arrey = [
        // {
        //     Kreditsum: 'Kreditsum.value',
        //     btn: 'btn.value',
        //     YillikFoiz: 'YillikFoiz.value',
        //     YillikMuddat:' YillikMuddat.value',
        //     Kalendaryili: 'Kalendaryili.value',
        //     Kalendaroyi: 'Kalendaroyi.value',
        // }
    ]




























    

    function inner() {
        var tr = "";
        var i = 0
        for (var td of arrey) {
            i++;
            tr += "<tr>" +
                "<td>" + i + "</td>"
                +"<td>" + td.Kalendaryili + "</td>"
                +"<td>" + td.Kalendaroyi +  "</td>"
            + "<td>" + td.Kreditsum + "</td>"
             +"<td>" + parseInt(td.Kalendaryili) * parseInt(td.YillikFoiz) +  "</td>"
            +"<td>" + parseInt(td.YillikFoiz)   /  100 + "</td>"
            +"<td>" + parseInt(td.YillikMuddat) +parseInt(td.boshlangicht) + "</td>"


            "</tr>"
        }
    
        document.getElementById("kridit-list").innerHTML = tr;
    }
    inner()

    knopka.addEventListener('click', (event) => {
        event.preventDefault()
        if (Kreditsum.value == '' && btf.value == '' && YillikFoiz.value == '' && YillikMuddat.value == '' && Kalendaryili.value == ''
            && Kalendaroyi.value == '' && btn.value == '' && kriditlist.value == '') {

        } else {
                var obj = {
                    Kreditsum: Kreditsum.value,
                    boshlangicht: boshlangicht.value,
                    YillikFoiz: YillikFoiz.value,
                    YillikMuddat: YillikMuddat.value,
                    Kalendaryili: Kalendaryili.value,
                    Kalendaroyi: Kalendaroyi.value,
                }
                arrey.push(obj)
                inner();
            console.log(arrey)

            Kreditsum.value = ''
            boshlangicht.value = ''
            YillikFoiz.value = ''
            YillikMuddat.value = ''
            Kalendaryili.value = ''
            Kalendaroyi.value = ''


        }
    })
})





