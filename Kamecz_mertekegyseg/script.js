function negysogol(irany)
    {
      if(irany==1)document.lap.nm.value = parseFloat(document.lap.ol.value)*3.6
        if(irany==2)document.lap.ol.value = parseFloat(document.lap.nm.value)/3.6
    }

    function merfold(irany)
    {
      if(irany==1)document.lap.km.value = parseFloat(document.lap.mf.value)*1.6
        if(irany==2)document.lap.mf.value = parseFloat(document.lap.km.value)/1.6
    }

    function loero(irany)
    {
      if(irany==1)document.lap.kw.value = parseFloat(document.lap.le.value)*0.7355
        if(irany==2)document.lap.le.value = parseFloat(document.lap.kw.value)/0.7355
    }

    function kcal(irany)
    {
      if(irany==1)document.lap.kj.value = parseFloat(document.lap.kc.value)*4.187
        if(irany==2)document.lap.kc.value = parseFloat(document.lap.kj.value)/4.187
    }
       