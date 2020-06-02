<div>
    <h3><center>Lista de productos</center></h3>
    @foreach($productosLista as $productos)
    {{$productos->id}} - {{$productos->nombre}} - {{$productos->precio}} <br/>
    @endforeach
</div>
