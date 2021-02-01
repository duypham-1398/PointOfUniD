function OutPoint() {
    let math = parseInt(document.getElementById('math').value);
    let literature = parseInt(document.getElementById('literature').value);
    let eng = parseInt(document.getElementById('eng').value);

    let area = document.getElementById('area').value;
    switch(area) {
        case "KV1":
            result = math + literature + eng + 0.75;
            break;
        case "KV2":
            result = math + literature + eng + 0.25;
            break;
        case "KV2-NT":
            result = math + literature + eng + 0.5;
            break;
        default:
            result = math + literature + eng;
    }
    document.getElementById('result').innerHTML = "Tổng điểm ĐH khối D của bạn là: " + result;
}