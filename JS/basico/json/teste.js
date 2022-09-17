//converter json em objeto literal e vice-versa
let colabJSON='{"colaboradores":['+
    '{"nome":"Bruno","salario":10000,"idade":40},'+
    '{"nome":"Blendasia","salario":13500,"idade":32},'+
    '{"nome":"Cli","salario":8200,"idade":25},'+
    '{"nome":"Fler","salario":350000,"idade":38},'+
    '{"nome":"Nil","salario":5000,"idade":21}'+
']}'

//json para objeto literal
let c_obj=JSON.parse(colabJSON)

console.log(c_obj.colaboradores)
console.log(c_obj.colaboradores[0])

//objeto para json
let c_json=JSON.stringify(c_obj)
console.log(c_json)