  const fs = require('fs')
  let _inventoryOrang = JSON.parse(fs.readFileSync('./database/user/inventory.json'))
  let besiAwal = 10
  let goldAwal = 10
  let diamondAwal = 10
  let umpanAwal = 5
  let obatAwal  = 5
  const addInventori = (sender) => {
  const obj = {id: sender, besi: besiAwal, gold: goldAwal, diamond: diamondAwal, umpan: umpanAwal, obat: obatAwal}
         _inventoryOrang.push(obj)
        fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
   }
  const cekInventory = (sender) => {
            let status = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addBesi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangBesi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getBesi = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].besi + ` ⛓️`
            }
        }     
  const addEmas = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangEmas = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getEmas = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gold + ` 🪙`
            }
        }     
  const addDiamond = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].diamond += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangDiamond = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].diamond -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getDiamond = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].diamond + ` 💎`
            }
        }     
        
  const addUmpan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangUmpan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getUmpan = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].umpan + ` 🎣`
            }
        }  
        
    const addObat = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender){
                  position = i
                  }

            })
            if (position !== false) {
                _inventoryOrang[position].obat += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   
        
   const kurangObat = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].obat -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
        
   const getObat = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].obat + ` ⛑️`
            }
        }           
        
  
   const checkPetualangUser = (sender) => {
            let status = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    status = true
                }
            })
            return status
        }
              
//BURUAN
 
  let _hasilBuruan = JSON.parse(fs.readFileSync('./database/user/buruan.json'))
const addInventoriBuruan = (sender) => {
 const objburu = {id: sender, ikan: 0, ayam: 0, kelinci: 0, domba: 0, sapi: 0, gajah: 0}
         _hasilBuruan.push(objburu)
        fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
   }
  const cekHasilBuruan= (sender) => {
            let status = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    status = true
                }
            })
            return status
        }
   const addAyam = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ayam += amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangAyam = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ayam -= amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getAyam = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].ayam + ` 🐓`
            }
        }    
  const addIkan = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ikan += amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangIkan = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ikan -= amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getIkan = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].ikan + ` 🐳`
            }
        }      
  const addKelinci = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kelinci += amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangKelinci = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kelinci -= amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getKelinci = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].kelinci + ` 🐇`
            }
        }     
  const addDomba = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].domba += amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangDomba = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].domba -= amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getDomba = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].domba + ` 🐏`
            }
        } 
    const addSapi = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].sapi += amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangSapi = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].sapi -= amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getSapi = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].sapi + ` 🐄`
            }
        }     
  const addGajah = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].gajah += amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangGajah = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].gajah -= amount
                fs.writeFileSync('./database/user/buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getGajah = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].gajah + ` 🐘`
            }
        }             
        
        
//MONEY
let _monayOrg = JSON.parse(fs.readFileSync('./database/user/monay.json'))
let monayAwal = 10000
const addInventoriMonay = (sender) => {
const objmonay = {id: sender, monay: monayAwal}
         _monayOrg.push(objmonay)
        fs.writeFileSync('./database/user/monay.json', JSON.stringify(_monayOrg))
   }
  const cekMonay = (sender) => {
            let status = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addMonay = (sender, amount) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _monayOrg[position].monay += amount
                fs.writeFileSync('./database/user/monay.json', JSON.stringify(_monayOrg))
            }
        }
   const kurangMonay = (sender, amount) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _monayOrg[position].monay -= amount
                fs.writeFileSync('./database/user/monay.json', JSON.stringify(_monayOrg))
            }
        }
   const getMonay = (sender) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _monayOrg[position].monay + ` 💸`
            }
        }     
                
        
  module.exports = { 
                     checkPetualangUser,
                     cekInventory, 
                     addInventori, 
                     addBesi, 
                     addEmas, 
                     addDiamond, 
                     addUmpan,
                     kurangBesi, 
                     kurangEmas, 
                     kurangDiamond, 
                     kurangUmpan,
                     getBesi, 
                     getEmas, 
                     getDiamond,
                     getUmpan,
                     cekHasilBuruan, 
                     addInventoriBuruan, 
                     addIkan,
                     addAyam, 
                     addKelinci, 
                     addDomba, 
                     addSapi,
                     addGajah,
                     kurangIkan,
                     kurangAyam, 
                     kurangKelinci, 
                     kurangDomba, 
                     kurangSapi,
                     kurangGajah,
                     getIkan,
                     getAyam, 
                     getKelinci, 
                     getDomba,
                     getSapi,
                     getGajah,
                     addInventoriMonay, 
                     cekMonay, 
                     addMonay, 
                     kurangMonay, 
                     getMonay,
                     getObat,
                     kurangObat,
                     addObat
     
                  }