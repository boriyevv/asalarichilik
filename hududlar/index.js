let tumanlar = document.querySelector('.tumanlar')
let select = document.querySelector('.select')
let xaritalar = document.querySelector('.xaritalar')




select.addEventListener('change', ()=>{
    console.log(select.value)
    if(select.value === 'qashqadaryo'){
        render(data.Qashqadaryo)
        renderMaps('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796311.6854060255!2d65.34873121167243!3d38.77304902105738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4c0f733ef3784f%3A0xad8977474640b0e7!2sQashqadaryo%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1742333815372!5m2!1sen!2s')
    }
    else if(select.value === 'toshkent'){
        render(data.Toshkent)
        renderMaps('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536226.0844302336!2d68.7158866806614!3d41.23393837302635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afbcaa73f2ce4d%3A0x57f19ae913e2f367!2sTashkent%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1742333894917!5m2!1sen!2s')
    }
    else if(select.value === 'samarqand'){
        render(data.Samarqand)
        renderMaps('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783335.1365909869!2d65.5695889767896!3d39.92118962956002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d192105ad6575%3A0x3dd6eaee02d96aa6!2sSamarqand%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1742334122845!5m2!1sen!2s')
    }
    else if(select.value === 'fargona'){
        render(data.Fargʻona)
        renderMaps('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778492.9736097767!2d70.58258594329462!3d40.34260825380047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba35e21e649803%3A0xcd6937bf69229b68!2sFergana%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1742334000288!5m2!1sen!2s')
    }
    
    else if(select.value === 'andijon'){
        render(data.Andijon)
        renderMaps('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386848.2483382459!2d72.03371223330012!3d40.75648317160166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc939c2cc9f571%3A0xf677ebc7b76654c8!2sAndijan%20region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1742334035355!5m2!1sen!2s')
    }
    else if(select.value === 'namangan'){
        render(data.Namangan)
        renderMaps('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769723.3573473364!2d70.60039431644725!3d41.09670483695261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4c708e5b54231%3A0x4e71cd6bb0e2df44!2sNamangan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1742334064825!5m2!1sen!2s')
    }
    else{
        tumanlar.innerHTML = 'Nimadir xato ketdi'
        
    }
    
})


console.log(data)

function render(data){

    tumanlar.innerHTML = null
    for(let i=0; i<data.length; i++){   
        let btn = document.createElement('button')
        btn.setAttribute('class', 'tumanlar-btn')
        btn.setAttribute('data-link', data[i].map)
        
        btn.textContent = data[i].name

        btn.addEventListener('click', ()=>{
            renderMaps(btn.dataset.link)
        })

        tumanlar.append(btn)
    }


}

function renderMaps(link){

    xaritalar.innerHTML = null

    let map = document.createElement('iframe')
    map.setAttribute('src', link)
    map.setAttribute('height', '550')
    map.setAttribute('width', '750')
    map.setAttribute('loading', 'lazy')
    map.setAttribute('style', 'border:0;')
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')

    xaritalar.append(map)
}