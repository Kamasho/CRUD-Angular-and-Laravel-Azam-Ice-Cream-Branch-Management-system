<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductionDept;

class ProductiondeptController extends Controller
{
    public function ProdDeptGetList(){
        return ProductionDept::all();
    }

    public function ProdDeptListById($id){
        return ProductionDept::find($id);
    }

    public function ProdDeptPost(Request $request){
        return ProductionDept::create($request->all());
    }

    public function ProdDeptUpdate(Request $request, $id){
        $member = ProductionDept::find($id);
        $member->update($request->all());
        return $member;
    }

    public function ProdDeptDelete($id){
        $member = ProductionDept::find($id);
        $member->delete();
        return 204;
    }
}
