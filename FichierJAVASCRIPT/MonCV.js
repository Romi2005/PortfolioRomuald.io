document.getElementById('afficherCV').addEventListener('click', function() {
    // Afficher le CV sur la page
    document.getElementById('cvContainer').innerHTML = '<iframe src="mon_cv.pdf" style="width:100%; height:600px;" frameborder="0"></iframe>';
    
    // Télécharger le CV directement
    var link = document.createElement('a');
    link.href = 'CV_Romuald_DJAHOUA_Alternance.pdf';
    link.download = 'CV_Romuald_DJAHOUA_Alternance.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
