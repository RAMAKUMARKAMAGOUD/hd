@extends('layouts.vertical', ['page_title' => 'CRM Leads'])

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">CRM</a></li>
                            <li class="breadcrumb-item active">Leads</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Leads</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->


        <div class="row">
            <div class="col-lg-8 order-lg-1 order-2">
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <form class="mb-2 mb-sm-0">
                                    <label for="inputPassword2" class="visually-hidden">Search</label>
                                    <input type="search" class="form-control" id="inputPassword2" placeholder="Search...">
                                </form>
                            </div>
                            <div class="col-sm-6">
                                <div class="text-sm-end">
                                    <button type="button" class="btn btn-success waves-effect waves-light me-1"><i class="mdi mdi-cog"></i></button>
                                    <button type="button" class="btn btn-danger waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#custom-modal"><i class="mdi mdi-plus-circle me-1"></i> Add New</button>
                                </div>
                            </div><!-- end col-->
                        </div>
                    </div> <!-- end card-body-->
                </div> <!-- end card-->

                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <div class="d-flex align-items-start">
                                    <img class="d-flex align-self-center me-3 rounded-circle" src="{{ Vite::asset('resources/images/companies/amazon.png') }}" alt="Generic placeholder image" height="64">
                                    <div class="w-100">
                                        <h4 class="mt-0 mb-2 font-16">Amazon Inc.</h4>
                                        <p class="mb-1"><b>Location:</b> Seattle, Washington</p>
                                        <p class="mb-0"><b>Category:</b> Ecommerce</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-center my-3 my-sm-0">
                                    <p class="mb-0 text-muted">October 22, 2018</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="text-center button-list">
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Assign</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Call</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Email</a>
                                </div>
                            </div>

                            <div class="col-sm-2">
                                <div class="text-sm-end text-center mt-2 mt-sm-0">
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </div>
                            </div> <!-- end col-->
                        </div> <!-- end row -->
                    </div>
                </div> <!-- end card-->

                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <div class="d-flex align-items-start">
                                    <img class="d-flex align-self-center me-3 rounded-circle" src="{{ Vite::asset('resources/images/companies/apple.png') }}" alt="Generic placeholder image" height="64">
                                    <div class="w-100">
                                        <h4 class="mt-0 mb-2 font-16">Apple Inc.</h4>
                                        <p class="mb-1"><b>Location:</b> Cupertino, California</p>
                                        <p class="mb-0"><b>Category:</b> Ecommerce</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-center my-3 my-sm-0">
                                    <p class="mb-0 text-muted">September 08, 2018</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="text-center button-list">
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Assign</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Call</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Email</a>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-sm-end text-center mt-2 mt-sm-0">
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </div>
                            </div> <!-- end col-->
                        </div> <!-- end row -->
                    </div>
                </div> <!-- end card-->

                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <div class="d-flex align-items-start">
                                    <img class="d-flex align-self-center me-3 rounded-circle" src="{{ Vite::asset('resources/images/companies/google.png') }}" alt="Generic placeholder image" height="64">
                                    <div class="w-100">
                                        <h4 class="mt-0 mb-2 font-16">Google LLC</h4>
                                        <p class="mb-1"><b>Location:</b> Menlo Park, California</p>
                                        <p class="mb-0"><b>Category:</b> Search engine</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-center my-3 my-sm-0">
                                    <p class="mb-0 text-muted">October 10, 2018</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="text-center button-list">
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Assign</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Call</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Email</a>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-sm-end text-center mt-2 mt-sm-0">
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </div>
                            </div> <!-- end col-->
                        </div> <!-- end row -->
                    </div>
                </div> <!-- end card-->

                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <div class="d-flex align-items-start">
                                    <img class="d-flex align-self-center me-3 rounded-circle" src="{{ Vite::asset('resources/images/companies/airbnb.png') }}" alt="Generic placeholder image" height="64">
                                    <div class="w-100">
                                        <h4 class="mt-0 mb-2 font-16">Airbnb Inc.</h4>
                                        <p class="mb-1"><b>Location:</b> San Francisco, California</p>
                                        <p class="mb-0"><b>Category:</b> Real Estate</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-center my-3 my-sm-0">
                                    <p class="mb-0 text-muted">August 18, 2018</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="text-center button-list">
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Assign</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Call</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Email</a>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-sm-end text-center mt-2 mt-sm-0">
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </div>
                            </div> <!-- end col-->
                        </div> <!-- end row -->
                    </div>
                </div> <!-- end card-->

                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <div class="d-flex align-items-start">
                                    <img class="d-flex align-self-center me-3 rounded-circle" src="{{ Vite::asset('resources/images/companies/cisco.png') }}" alt="Generic placeholder image" height="64">
                                    <div class="w-100">
                                        <h4 class="mt-0 mb-2 font-16">Cisco Systems</h4>
                                        <p class="mb-1"><b>Location:</b> San Jose, California</p>
                                        <p class="mb-0"><b>Category:</b> Operating Systems</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-center my-3 my-sm-0">
                                    <p class="mb-0 text-muted">March 28, 2018</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="text-center button-list">
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Assign</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Call</a>
                                    <a href="javascript: void(0);" class="btn btn-xs btn-primary waves-effect waves-light">Email</a>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="text-sm-end text-center mt-2 mt-sm-0">
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </div>
                            </div> <!-- end col-->
                        </div> <!-- end row -->
                    </div>
                </div> <!-- end card-->

                <div class="text-center my-4">
                    <a href="javascript:void(0);" class="text-danger"><i class="mdi mdi-spin mdi-loading me-1"></i> Load more </a>
                </div>

            </div> <!-- end col -->

            <div class="col-lg-4 order-lg-2 order-1">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title mb-3">Leads Statics</h4>

                        <div class="text-center" dir="ltr">
                            <div class="row mt-2">
                                <div class="col-6">
                                    <h3 data-plugin="counterup">1,284</h3>
                                    <p class="text-muted font-13 mb-0 text-truncate">Leads Won</p>
                                </div>
                                <div class="col-6">
                                    <h3 data-plugin="counterup">7,841</h3>
                                    <p class="text-muted font-13 mb-0 text-truncate">Leads Lost</p>
                                </div>
                            </div>

                            <div id="leads-statics" style="height: 280px;" class="morris-chart" data-colors="#4a81d4,#e3eaef"></div>

                            <p class="text-muted font-15 font-family-secondary mb-0 mt-3">
                                <span class="mx-2"><i class="mdi mdi-checkbox-blank-circle text-blue"></i> Leads Won</span>
                                <span class="mx-2"><i class="mdi mdi-checkbox-blank-circle text-muted"></i> Leads Lost</span>
                            </p>
                        </div>

                    </div>
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

    </div> <!-- container -->

    <!-- Modal -->
    <div class="modal fade" id="custom-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-light">
                    <h4 class="modal-title" id="myCenterModalLabel">Add New Leads</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                </div>
                <div class="modal-body p-4">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter company name">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                        </div>
                        <div class="mb-3">
                            <label for="position" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="position" placeholder="Enter phone number">
                        </div>
                        <div class="mb-3">
                            <label for="category" class="form-label">Category</label>
                            <input type="text" class="form-control" id="category" placeholder="Enter category">
                        </div>

                        <div class="text-end">
                            <button type="submit" class="btn btn-success waves-effect waves-light">Save</button>
                            <button type="button" class="btn btn-danger waves-effect waves-light" data-bs-dismiss="modal">Continue</button>
                        </div>
                    </form>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
@endsection

@section('script')
    @vite(['resources/js/pages/crm-leads.init.js'])
@endsection
