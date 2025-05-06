function DownloadPDF() {
    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const summary = document.getElementById("Summary").value;
    const experience = document.getElementById("Experience").value;
    const training = document.getElementById("Training").value;
    const skills = document.getElementById("Skills").value;

    document.getElementById("NamePDF").textContent = name;
    document.getElementById("EmailPDF").textContent = email;
    document.getElementById("SummaryPDF").textContent = summary;
    document.getElementById("ExperiencePDF").textContent = experience;
    document.getElementById("TrainingPDF").textContent = training;
    document.getElementById("SkillsPDF").textContent = skills;

    const content = document.getElementById("PDF");

    const opt = {
        margin: 1,
        filename: 'curriculo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(content).save().then
}
