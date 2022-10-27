
const url = "https://crudcrud.com/api/8f0ae45f127e4e2684ed97bc88ca2640/mahasiswa"

//fungsi create-------------------------------------------
const create  =()=>{
    const nama = document.getElementById('nama').value
    const nrp = document.getElementById('nrp').value
    const jurusan= document.getElementById('jurusan').value

    const data = {
        nama: nama,
        nrp: nrp,
        jurusan: jurusan
    }
    // console.log(data)
    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then((res)=> {
        alert('data baru ditambahkan, silahkan refresh halaman untuk melihat perubahan')
        document.getElementById('nama').value = ''
        document.getElementById('nrp').value = ''
        document.getElementById('jurusan').value = ''
    })
    
}
//fungsi read--------------------------------------------
fetch(url)
.then((res)=> res.json())
.then((res)=>{
    let hasil = res
    let card =''
    for (let i = 0; i < res.length; i++){

      let id= hasil[i]._id
      //fungsi delete------------------------------------
      hapus = ()=>{

      fetch(`${url}/${id}`, {
          method: 'DELETE',
      })
      .then((res)=>{
          alert('data berhasil dihapus')
      })
      .catch((err)=>{
          alert('data gagal dihapus')
          console.log(err);
      })}

        card+=`
        <tr class="text-center">
          <th scope="row" id="nomor">${i+1}</th>
          <td>${hasil[i].nama}</td>
          <td>${hasil[i].nrp}</td>
          <td>${hasil[i].jurusan}</td>
          <td>${hasil[i]._id}</td>
          <td class="text-center">
            <button class="btn btn-warning id="edit">Ubah</button>
            <button onclick="hapus()"class="btn btn-danger" id"erase">Hapus</button>
          </td>
        </tr>
      </tbody>
      </table>`
        document.getElementById('body').innerHTML = card;
        
        
        }
        
})

.catch((err)=>console.log(err))

