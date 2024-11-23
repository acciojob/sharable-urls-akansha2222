// your code here
document.getelementbyId(button).eventListener("click",function()
		{
			const name=document.getElementbyId(name);
			const year=document.getElementbyId(year);	
			const url=document.getElementbyId(url)
		const queryString = `?name=${name}&year=${year}`;
      const url = `https://localhost:8080/${queryString}`;
      url.innerText = url;
    });})