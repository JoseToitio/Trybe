const getSelect = document.querySelector('#estados');
const arrayEstados = ['Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
]

function addEstados() {
    for (let index = 0; index < arrayEstados.length; index += 1){
        const estados = arrayEstados[index];
        const addOption = document.createElement('option');
        addOption.innerHTML = estados;
        getSelect.appendChild(addOption);
    }
}
addEstados();