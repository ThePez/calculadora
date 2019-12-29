var p_principal = $("#p_principal");
var p_secundaria = $("#p_secundaria");
var sumar;
var restar;
var dividir;
var multiplicar;
var primer = true;
var borrar = true;


function P_principal(numero)
{
    if(borrar)
    {
        borrar = false;
        if(numero == "," || numero == ".")
        {
            p_principal.text("0.");
            return 1;
        }
        else
        {
            p_principal.text(numero);
            return 1;
        }
    }
    if((numero == "," || numero == ".") && p_principal.text() == "")
    {
        p_principal.text("0.");
        return 1;
    }
    else if(numero == "," || numero == ".") 
    {
        if(p_principal.text().indexOf('.') != -1)
        {
            return 1;
        }
        p_principal.text(p_principal.text() + ".");
        return 1;
    }
    else if(numero == 0 && p_principal.text() == "0")
    {
        p_principal.text("0")
        return 1;
    }
    else if(numero != 0 && p_principal.text() == "0")
    {
        p_principal.text(numero);
        return 1;
    }
    else
    {
        p_principal.text(p_principal.text() + numero);
        return 1;
    }
}

function P_secundaria(numero)
{
    p_secundaria.text(numero);
    return 1;
}

function Operacion(operacion)
{
    if(operacion == "CE")
    {
        p_principal.text("0");
        p_secundaria.text("0");
        sumar = false;
        restar = false;
        multiplicar = false;
        dividir = false;
        primer = true;
    }
    else if(operacion == "<-")
    {
        p_principal.text(p_principal.text().substring(0, p_principal.text().length - 1));
    }
    else if(operacion == "=")
    {
        borrar = true;
        primer = true;
        if(sumar)
        {            
            var resultado = parseFloat(p_secundaria.text()) + parseFloat(p_principal.text());
            p_secundaria.text("0");
            p_principal.text("0");
            p_principal.text(resultado);
            sumar = false;
        }
        else if(restar)
        {            
            var resultado = parseFloat(p_secundaria.text()) - parseFloat(p_principal.text());
            p_secundaria.text("0");
            p_principal.text("0");
            p_principal.text(resultado);
            restar = false;
        }
        else if(multiplicar)
        {            
            var resultado = parseFloat(p_secundaria.text()) * parseFloat(p_principal.text());
            p_secundaria.text("0");
            p_principal.text("0");
            p_principal.text(resultado);
            multiplicar = false;
        }
        else if(dividir)
        {
            var resultado = parseFloat(p_secundaria.text()) / parseFloat(p_principal.text());
            p_secundaria.text("0");
            p_principal.text("0");
            p_principal.text(resultado);
            dividir = false;
        }
    }
    else if(operacion == "/")
    {
        Dividir();
    }
    else if(operacion == "*")
    {
        Multiplicar();
    }
    else if(operacion == "-")
    {
        Restar();
    }
    else if(operacion == "+")
    {
        Sumar();
    }
}

function Sumar()
{
    if(primer)
    {
        primer = false;
        p_secundaria.text(p_principal.text());
        p_principal.text("");
    }
    else
    {
        if(restar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) - parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else if(multiplicar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) * parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else if(dividir)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) / parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) + parseFloat(p_principal.text()));
            p_principal.text("");
        }
    }
    
    sumar = true;
    restar = false;
    multiplicar = false;
    dividir = false;
}

function Restar()
{
    if(primer)
    {
        primer = false;
        p_secundaria.text(p_principal.text());
        p_principal.text("");
    }
    else
    {
        if(sumar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) + parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else if(multiplicar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) * parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else if(dividir)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) / parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) - parseFloat(p_principal.text()));
            p_principal.text("");
        }
    }
    
    sumar = false;
    restar = true;
    multiplicar = false;
    dividir = false;
}

function Multiplicar()
{
    if(primer)
    {
        primer = false;
        p_secundaria.text(p_principal.text());
        p_principal.text("");
    }
    else
    {
        if(sumar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) + parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else if(restar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) - parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else if(dividir)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) / parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) * parseFloat(p_principal.text()));
            p_principal.text("");
        }
    }
    
    sumar = false;
    restar = false;
    multiplicar = true;
    dividir = false;
}

function Dividir()
{
    if(primer)
    {
        primer = false;
        p_secundaria.text(p_principal.text());
        p_principal.text("");
    }
    else
    {
        if(sumar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) + parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else if(restar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) - parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else if(multiplicar)
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) * parseFloat(p_principal.text()));
            p_principal.text("");
        }
        else
        {
            p_secundaria.text(parseFloat(p_secundaria.text()) / parseFloat(p_principal.text()));
            p_principal.text("");
        }
    }
    
    sumar = false;
    restar = false;
    multiplicar = false;
    dividir = true;
}